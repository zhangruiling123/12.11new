const Cotroller = require('egg').Controller
class IndexController extends Cotroller{
    async init(ctx){
        ctx.body = 'hello egg'
    }
}
module.exports = IndexController