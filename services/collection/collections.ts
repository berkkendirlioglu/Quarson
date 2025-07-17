

export async function getUserInfo(){
    const response = await fetch(
        "https://api.jsonbin.io/v3/b/68737d616063391d31aca60b",
        {
          headers: {
            "X-Master-Key": "$2a$10$J7XTSo.Kn3G8pDsBE664RuEPvAczIIcIRiud7EV6z8F0Wcv./AUq2",
          },
        }
      );
    const jsonData = await response.json();

    return jsonData.record.users;
}