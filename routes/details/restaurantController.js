const fetch = require("node-fetch");

const restaurantController = async (req, res) => {
  var requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": "c5f67862202f4577ab36a72ad04b38ca"
    }
  };

  let response = await fetch(
    "https://dh-dev-apim.azure-api.net/restaurants/info/v1/QA-SUGARMASH/menu",
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
  console.log(response, "responseFromAPI");

  //adding few more menuitems
  response.menu.push({
    menu_name: "Drinks",
    open_for_order: true,
    menu_sections: [
      {
        section_name: "Food",
        menu_categories: [
          {
            name: "Fresh Juices",
            items: [
              {
                id: "99999",
                name: "Orange",
                description: "",
                price: 30,
                image: "",
                comment_code: "90007"
              },
              {
                id: "99999",
                name: "Apple",
                description: "",
                price: 20,
                image: "",
                comment_code: "90007"
              },
              {
                id: "99999",
                name: "WaterMelon",
                description:
                  "Banana Split, trio of Ice Cream, Chocolate Sprinkles",
                price: 45,
                image:
                  "https://dxp-hospitality-dev-rg-sit-467300-cd2.azurewebsites.net//-/mediadh/dh/hospitality/e-menu/menus/alnpool/96178.jpg",
                comment_code: "90007"
              },
              {
                id: "99999",
                name: "Custard Apple",
                description:
                  "Rich Brownie, Frozen Vanilla Yoghurt, Chocolate Sauce",
                price: 45,
                image:
                  "https://dxp-hospitality-dev-rg-sit-467300-cd2.azurewebsites.net//-/mediadh/dh/hospitality/e-menu/menus/alnpool/96182.jpg",
                comment_code: "90007"
              }
            ]
          },
          {
            name: "Hot Beverages",
            items: [
              {
                id: "99999",
                name: "Tea",
                description:
                  "Hearts of Romaine, Parmesan Cheese, Crispy Capers, Herb Croutons, Caesar Dressing",
                price: 75,
                image:
                  "https://dxp-hospitality-dev-rg-sit-467300-cd2.azurewebsites.net//-/mediadh/dh/hospitality/e-menu/menus/alnpool/5018.jpg",
                comment_code: "90008"
              },
              {
                id: "99999",
                name: "Coffee",
                description:
                  "Crushed Beetroot and Avocado, Crunchy Kale, Yoghurt Dressing",
                price: 70,
                image:
                  "https://dxp-hospitality-dev-rg-sit-467300-cd2.azurewebsites.net//-/mediadh/dh/hospitality/e-menu/menus/alnpool/5020.jpg",
                comment_code: "90008"
              }
            ]
          },
          {
            name: "Cold Beverages",
            items: [
              {
                id: "Cold Coffee",
                name: "Char Sui Bun",
                description: "",
                price: 53,
                image: "",
                comment_code: "90007"
              },
              {
                id: "Cold Chocolate",
                name: "Sea Bream",
                description: "",
                price: 58,
                image: "",
                comment_code: "90007"
              }
            ]
          }
        ]
      }
    ]
  });

  console.log(response, "transformedResponse");
  return res.status(200).json(response);
};

module.exports = restaurantController;
