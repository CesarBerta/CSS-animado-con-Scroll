const express = require("express");
const path = require("path");

const app = express();

/* acceso a carpetas de recursos estaticos Public */
app.use(express.static("public"));

/* Configuro EJS como el template engine */
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));

/* inicializa servidor */
const port = 3039;
app.listen(port, () => console.log(`http://localhost:${port}`));

const indexRouter = require('./routes/index.routes');

app.use('/', indexRouter);

app.use((req, res, next) => {
    res.status(404).render('error404.ejs');
    next();
});