const index = (req, res) => {
  res.render('index', {
    title: 'ProjNotes',
  });
};

const itgam = (req, res) =>{
  res.status(200).json({
    message: 'Hola bienvenido a la porgramacion fullstack web',
  });
};
export default {
  index,
  itgam,
};
