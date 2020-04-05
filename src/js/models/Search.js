import data from "../../../data/test";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      // Here we should put the axios function
      setTimeout(() => {
        this.result = data.data;
      }, 2000);
    } catch (error) {
      alert(error);
    }
  }
}
