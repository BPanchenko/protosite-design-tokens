import type { BuildOptions, BuildResult } from 'esbuild';

import { analyzeMetafileSync, build } from 'esbuild';
import { shimPlugin } from 'esbuild-shim-plugin';

const config: BuildOptions = {
  allowOverwrite: true,
  bundle: true,
  color: true,
  keepNames: true,
  legalComments: 'inline',
  entryPoints: ['source_code/index.ts'],
  lineLimit: 120,
  logLevel: 'info',
  metafile: true,
  minify: true,
  outdir: 'assets',
  outbase: 'source_code',
  packages: 'bundle',
  platform: 'node',
  sourcemap: false,
  splitting: false,
  supported: {
    'const-and-let': true,
    'dynamic-import': true,
    'export-star-as': true,
    'for-await': true,
    'for-of': true,
    'function-name-configurable': true,
    'function-or-class-property-access': true,
    'import-assertions': true,
    'import-attributes': true,
    'import-meta': true,
    'top-level-await': true,
    'unicode-escapes': true,
  },
  treeShaking: true,
  tsconfig: 'tsconfig.json',
  write: true,
};

const handleBuildResult = (result: BuildResult): void => {
  if (result.metafile) {
    console.log(
      analyzeMetafileSync(result.metafile, {
        verbose: true,
      })
    );
  }
};

await build({
  ...config,
  format: 'esm',
}).then(handleBuildResult);

await build({
  ...config,
  format: 'cjs',
  outExtension: { '.js': '.cjs' },
  plugins: [shimPlugin()],
}).then(handleBuildResult);