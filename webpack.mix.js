let mix = require("laravel-mix");

mix.sass("./src/sass/app.scss", "./dist/assets/css/style.min.css");
mix.js(["./src/js/app.js"], "./dist/assets/js/app.min.js");

mix.autoload({
    jquery: ["$", "window.jQuery", "jquery", "jQuery"],
});
mix.options({
    processCssUrls: false,
    postCss: [
        require("postcss-discard-comments")({
            removeAll: true,
        }),
    ],
    uglify: {
        comments: false,
    },
});
