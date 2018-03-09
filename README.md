# UI de hoteles
UI de hoteles realizada con react y redux

## Cómo levanto la aplicación?
- docker build -t alm-ui .
- docker run -d -p 8000:8000 alm-ui npm start

## Qué recursos usé?
- React
- Redux
- Immutable para el estado, para poder emcapsular bien los datos y no haya problemas en desarrollo
- react-bootstrap
- redux-thunk para pegarle a la api
- webpack como automatizador