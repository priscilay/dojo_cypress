// Função para fazer um GET Request
export const postRequest = (url, body) => {
  return cy.request({
    method: 'POST',
    url: url,
    failOnStatusCode: false,
    headers: {
      'Content-Type': 'application/json',
    },
    body
  });
};

export const loginAndGetToken = (username, password) => {
    return cy.request({
      method: 'POST',
      url: '/login',
      body: {
        username,
        password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      return response.body.token;
    });
  };
  