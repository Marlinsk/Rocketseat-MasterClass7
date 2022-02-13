import { Request, Response } from 'express';
import TaxonomiaService from '../services/TaxonomiaService';

const animals = [
    { name: 'Arara-azul-grande', specie: 'Anodorhynchus hyacinthinus' },
    { name: 'Baleia-jubarte', specie: 'Megaptera novaeangliae' },
    { name: 'besouro-hércules', specie: 'Dynastes hercules' }, 
    { name: 'Leão-do-atlas', specie: 'Panthera leo leo' },
    { name: 'leopardo-das-neves', specie: 'Panthera uncia' },
    { name: 'Mariposa-atlas', specie: 'Attacus atlas' },
    { name: 'Tamanduá-de-colete', specie: 'Tamandua tetradactyla' },
    { name: 'Tatu-bola-do-nordeste', specie: 'Tolypeutes tricinctus' },
    { name: 'Tucano-toco', specie: 'Ramphastidae Toco' }
];

export default {
    async index(req: Request, res: Response) {
        return res.json(animals);
    },

    async create(req: Request, res: Response) {
        const taxonomiaService = new TaxonomiaService();

        taxonomiaService.animalClassification({
            animaldata: { 
                name: 'Elefante-africano', 
                specie: 'Loxodonta' 
            },
            tax: { 
                ordername: 'Proboscidea', 
                familyname: 'Elephantidae'
            }
        });

        return res.send();
    }
};