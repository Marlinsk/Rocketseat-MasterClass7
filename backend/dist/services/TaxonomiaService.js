"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaxonomiaService {
    animalClassification({ animaldata, tax }) {
        console.log(`${animaldata.name}(${animaldata.specie}) classificado na ordem ${tax.ordername} da família ${tax.familyname}.`);
    }
}
exports.default = TaxonomiaService;
