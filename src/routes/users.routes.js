import { Router } from "express";

const router = Router();

router.get('/user', (req, resp) =>{
    resp.send('Obteniendo usuarios...');
})

router.get('/user/:id', (req, resp) =>{
    const {id} = req.params
    resp.send('obtener un usuario')
})

router.post('/user/', (req, resp) =>{
    resp.send('Creando...');
})

router.delete('/user/:id', (req, resp) =>{
    const {id} = req.params
    resp.send('Eliminando usuario...');
})

router.put('/user/:id', (req, resp) =>{
    resp.send('Actualizar usuarios...');
})

export default router;