# StyleBook

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/2807ec39b8bb4628a37cee26aed4748e)](https://app.codacy.com?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/2807ec39b8bb4628a37cee26aed4748e)](https://app.codacy.com?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_coverage)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## How to a new theme.
1. Create a new token file in the tokens folder: `tokens/tokens`. The naming should follow the convention: 
 
`<your-theme-name>.tokens.json`, where `<your-theme-name>` is a unique and descriptive theme name. eg: `sw-dark-theme.tokens.json`

The expected format of this file is a figma token file. For a quick start, you can copy an existing token file, rename it and change the desired token values.

2. Add your theme name to the style-dictionary config. Open the file `tokens/style-dictionary.js` and add your theme-name to the list of themes:

`const themes = ["sw-theme", "sw-crazy-theme", "sw-dark-theme"];`

3. Now, running the style-dictionary tool the vars scss files will be created at `tokens/build/scss`.

```
$style-book> node tokens\style-dictionary.js
```

The file containing the scss vars scss map will be created. Both files contains the same configurations but in different formats (vars and maps).

4. Add your theme to the config. In the file `style-book\src\styles\themes.scss` add a new line for the @use and a new var with your theme:

```
@use 'tokens/build/scss/map.sw-theme' as sw-theme;
@use 'tokens/build/scss/map.sw-crazy-theme' as sw-crazy-theme;
@use 'tokens/build/scss/map.sw-dark-theme' as sw-dark-theme;  // Your new line 1/2 !
@use 'theme-config/theme' as theme;

$sw-theme: theme.create(sw-theme.$tokens);
$sw-crazy-theme: theme.create(sw-crazy-theme.$tokens);
$sw-dark-theme: theme.create(sw-dark-theme.$tokens);    // Your new line 2/2 !
```

5. Create the new scss file in the style-book/src folder. The name should have the following naming convention: sw-style-<theme-name>.scss, where <theme-name> should a descriptive
an unique name for the theme. eg: `sw-style-sw-dark-theme.scss`.
```
@use 'styles/themes' as themes;
@use 'sw-style' as sw-style;

.sw-dark-theme {                    // 1/2: The css class should be the same than the theme name.
  $theme: themes.$sw-dark-theme;    // 2/2: Use your theme config map.

  @include sw-style.theme($theme);
}
```

6. Add the scss main file to the angular.json.
In the `architect/build/options/styles` array, add the created file:
```
"styles": [
  {
    "input":"src/styles.scss",
    "bundleName": "styles"
  },
  {
    "input":"src/sw-style-sw-theme.scss",
    "bundleName": "sw-style-sw-theme"
  },
  {
    "input":"src/sw-style-sw-crazy-theme.scss",
    "bundleName": "sw-style-crazy-sw-theme"
  },
  {
    "input":"src/sw-style-sw-dark-theme.scss",    // <-- Your created file
    "bundleName": "sw-style-crazy-sw-theme"       // <-- Your created file
  }
]
```

In the `architect/test/options/styles` array, add the created file:
```
"test": {
  "builder": "@angular-devkit/build-angular:karma",
  "options": {
    "polyfills": [
      "zone.js",
      "zone.js/testing"
    ],
    "tsConfig": "tsconfig.spec.json",
    "inlineStyleLanguage": "scss",
    "assets": [
      "src/favicon.ico",
      "src/assets"
    ],
    "styles": [
      "src/styles.scss",
      "src/sw-style-sw-crazy-theme.scss",
      "src/sw-style-sw-dark-theme.scss"         // <-- Your created file
    ],
    "scripts": []
  }
}
```


7. Add the theme to the select to use it from the theme selector (`src/app/app.component.html`):
```
<mat-select (valueChange)="changeTheme($event)">
  <mat-option value="sw-theme">sw-theme</mat-option>
  <mat-option value="sw-crazy-theme">sw-crazy-theme</mat-option>
  <mat-option value="sw-dark-theme">sw-dark-theme</mat-option>  // <-- New entry
</mat-select>
```
