/*
 * @Date: 2020-08-06 11:14:52
 * @LastEditors: liujunfei
 * @LastEditTime: 2020-08-06 15:03:40
 * @Description: 
 */
module.exports = function(api){
    api.cache(false);
    return {
        presets: [
            [
              "@babel/preset-react",
              {
                development: process.env.BABEL_ENV === "development",
              },
            ],
          ]
    }
}