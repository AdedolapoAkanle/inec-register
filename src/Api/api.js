const url = "http://localhost/inec-register-api";

export const api = async (page, data) => {
  const req = await fetch(`${url}/${page}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const res = await req.json();
  return res;
};
