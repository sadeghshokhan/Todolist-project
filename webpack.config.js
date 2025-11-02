const path = require("path")

module.exports = {
    entry : './app/index.js',

    output : {
        path : path.resolve(__dirname , 'build') ,
        filename : 'bundle.js'
    },
    module : {
        rules:[
            {
                test:/\.css$/ ,
                use:['style-loader' , 'css-loader']
            }
        ]
    }
}