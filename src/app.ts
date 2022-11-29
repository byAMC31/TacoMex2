import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { create } from "express-handlebars";
import indexRouts from './routes';


class Application{

    app: express.Application;

    constructor(){
        this.app= express();
        this.settings();
        this.middlewares();
        this.routes();
    }


    settings() {
        this.app.set('port',3000);
        this.app.set("views", path.join(__dirname, "views"));
        this.app.engine(
          ".hbs",
          create({
            layoutsDir: path.join(this.app.get("views"), "layouts"),
            partialsDir: path.join(this.app.get("views"), "partials"),
            defaultLayout: "main",
            extname: ".hbs",
          }).engine
        );
        this.app.set("view engine", ".hbs");
      }


middlewares(){
this.app.use(morgan('dev'));

}



routes(){
    this.app.use("/", indexRouts);
}





start(){
this.app.listen(this.app.get('port'), () => {
console.log('Server on port', this.app.get('port'));

});
}


}

export default Application;