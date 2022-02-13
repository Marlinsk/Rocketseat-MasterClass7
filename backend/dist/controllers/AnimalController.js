"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TaxonomiaService_1 = __importDefault(require("../services/TaxonomiaService"));
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
exports.default = {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json(animals);
        });
    },
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const taxonomiaService = new TaxonomiaService_1.default();
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
        });
    }
};
