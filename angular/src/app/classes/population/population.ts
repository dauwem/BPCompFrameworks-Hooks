export class Population {
  constructor(private populationService) { }

  async getPopulation(countryCode) {
    return await this.populationService.getPopulation(countryCode);
  }
}
