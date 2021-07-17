class API {
  constructor(url = "https://api.npms.io/v2/") {
    this.url = url;
  }

  getData({ method = "GET", url = this.url, data = null }) {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.send(data);
      xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        resolve(xhr);
      };
    });
  }

  async getSearch(searchString, offset = 0, size = 10) {
    const query = {
      q: searchString,
      size,
      from: offset,
    };
    let url = new window.URLSearchParams(query);
    url = this.url + "search?" + url.toString();
    const response = await this.getData({ url });
    const result = {
      status: this.getResponseStatus(response),
    };
    try {
      const data = JSON.parse(response.responseText);
      result.data = data;
    } catch (err) {
      result.status = false;
    } finally {
      return result;
    }
  }
  
  getResponseStatus(response) {
    return response.status >= 200 && response.status < 300;
  }
}

export default API;
