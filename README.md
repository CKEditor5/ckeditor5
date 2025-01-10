# https://ckeditor5.github.io

Installation steps.

```
npm i
```

*[OPTIONAL]* Assuming you've got [ckeditor5 cloned (and working)](https://github.com/ckeditor/ckeditor5/wiki/Development-environment) and want to use packages from it (Webpack is configured to use `packages/` and `node_modules/`):

```
mkdir packages
ln -s /workspace/ckeditor5/packages packages/\@ckeditor
```

Finally, build CKEditor for the sample:

```
npm run build
```
