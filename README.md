# \<ordent-collection\>
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/my-element)

## \<ordent-dialog\>
The `ordent-dialog` element exposes an easy to use dialog styled modal based on paper-dialog behaviour. We already implemented 4 themes for easy to use setup and a list style dialog trigger.

    <ordent-dialog class="info" id="info"><p>Ini Deskripsi</p></ordent-dialog>

You can trigger the dialog easily with open and close function, just like paper-dialog.

## \<ordent-single-upload\>

`<ordent-single-upload>` element give you a proper file upload mechanism. It also equipped with image viewer so you can preview the image after uploading.

    <ordent-single-upload view auto-resize auto-upload upload-attribute="files" upload-url=""></ordent-single-upload>

`auto-upload` attributes will allow your file to be uploaded everytime you finish choosing file. In order to use the image viewer you will have to use `view` attribute

Note : the `payload` attributes could be used if you want to add another payload to the body of the request.

## \<ordent-multiple-upload\>

Whenever you are uploading multiple files, theres always an issue of management and payload size to handle in order to have smooth and seamless upload performance.

You could use `<ordent-multiple-upload>` to do all of that effortlessly.

    <ordent-multiple-upload upload-attribute="files" upload-url="https://api.alatberat.ordent.id/api/files"></ordent-multiple-upload>

Note : `auto-upload` will handle if you want the upload processing automatically or manually.

## \<ordent-styles\>
A simple module stylesheet that handle font and typography.

## \<ordent-states\>

Polymer Redux Factory Mixin ready to use whenever you need to handle global state management. Just insert the initial state and reducer in order to create the mixin.

## \<ordent-authorization\>

A simple scaffolding easy to use authorization system that handle all authorization process. If you want to insert your own StateManagement Architecture, set the `window.AppState` before calling this element.