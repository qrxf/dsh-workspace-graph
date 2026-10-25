import { build } from "esbuild";
import { mkdir, writeFile, readFile, readdir } from "node:fs/promises";
// CSS is inlined as text, so a Windows checkout (CRLF, core.autocrlf=true) would
// otherwise emit a different bundle than the LF CI build.
const cssAsLfText = {
  name: "css-as-lf-text",
  setup(builder) {
    builder.onLoad({ filter: /\.css$/ }, async (args) => ({
      contents: (await readFile(args.path, "utf8")).replace(/\r\n?/g, "\n"),
      loader: "text",
    }));
  },
};
await mkdir("dist", { recursive: true });
const result = await build({
  entryPoints: ["src/client.tsx"],
  bundle: true,
  write: false,
  format: "cjs",
  platform: "browser",
  target: "chrome120",
  jsx: "transform",
  external: ["react", "react-dom", "react-dom/client", "react/jsx-runtime"],
  loader: { ".css": "text" },
  plugins: [cssAsLfText],
  define: { "process.env.NODE_ENV": '"production"' },
  minify: true,
  legalComments: "inline",
  metafile: true,
});
const code = result.outputFiles[0].text;
await writeFile(
  "dist/client.js",
  "/* dsh-workspace-graph | MIT | React Flow (MIT) */\n" +
    'window.__ModuleLoader__.load({id:"dsh-workspace-graph",factory:function(require){var module={exports:{}};var exports=module.exports;' +
    code +
    ";return module.exports;}});",
);
await build({
  entryPoints: ["src/host.ts"],
  outfile: "dist/host.js",
  format: "esm",
  platform: "node",
  target: "node22",
});
await writeFile(
  "dist/build-meta.json",
  JSON.stringify(
    {
      targetDSH: "0.2.1-rc.2",
      react: "external",
      graph: "@xyflow/react 12.12.0",
      bytes: Buffer.byteLength(code),
    },
    null,
    2,
  ),
);
console.log(
  "Built DSH client (" +
    Math.round(Buffer.byteLength(code) / 1024) +
    " KiB) and host entry.",
);

const packages = new Set(
  Object.keys(result.metafile.inputs)
    .filter((input) => input.includes("node_modules/"))
    .map((input) => {
      const parts = input.split("node_modules/").at(-1).split("/");
      return parts[0].startsWith("@") ? parts.slice(0, 2).join("/") : parts[0];
    }),
);
const notices = [],
  nl = String.fromCharCode(10);
for (const name of [...packages].sort()) {
  const base = "node_modules/" + name,
    metadata = JSON.parse(await readFile(base + "/package.json", "utf8"));
  const license = (await readdir(base)).find((file) =>
    /^licen[cs]e(?:\.(?:txt|md))?$/i.test(file),
  );
  notices.push(
    name +
      " " +
      metadata.version +
      " (" +
      (metadata.license ?? "see package") +
      ")" +
      nl +
      (license
        ? await readFile(base + "/" + license, "utf8")
        : "License text: see the upstream package."),
  );
}
await writeFile(
  "dist/THIRD_PARTY_LICENSES.txt",
  notices.join(nl + nl + "--------------------" + nl + nl),
);
