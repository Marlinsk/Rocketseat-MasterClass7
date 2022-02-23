interface IAnimalData {
  name: string;
  specie: string;
}

interface ITaxonimia {
  ordername: string;
  familyname: string;
}

interface ITaxDTO {
  animaldata: IAnimalData;
  tax: ITaxonimia;
}

interface IAnimalClassificationService {
  animalClassification(request: ITaxDTO): void;
}

class TaxonomiaService implements IAnimalClassificationService {
  animalClassification({ animaldata, tax }: ITaxDTO) {
    console.log(
      `${animaldata.name}(${animaldata.specie}) classificado na ordem ${tax.ordername} da família ${tax.familyname}.`
    );
  }
}

export default TaxonomiaService;
