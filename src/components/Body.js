
import RestoCard  from "./RestoCard";
import { restoData } from "../utils/mockData";
import { useState } from "react";
const Body=()=>{
    let [resList,setRestoData]=useState([
    
    {
      "info": {
        "id": "3324",
        "name": "Srikanya",
        "cloudinaryImageId": "tw4ytwle8yommmgdy4b0",
        "locality": "Somajiguda",
        "areaName": "Punjagutta",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Biryani",
          "Andhra",
          "South Indian"
        ],
        "avgRating": 4.3,
        "parentId": "7317",
        "avgRatingString": "4.3",
        "totalRatingsString": "87K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 4.6,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "4.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-05-09 15:30:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {

        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "3.0K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-77ed5383-549a-4280-85af-9c9ac53f28c6"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/srikanya-somajiguda-punjagutta-rest3324",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "12046",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/829600e8-7dd3-411f-8d69-cbff4417ea59_12046.JPG",
        "locality": "Telangana",
        "areaName": "Himayath Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "sandwich",
          "Salads",
          "wrap",
          "Healthy Food"
        ],
        "avgRating": 4.3,
        "parentId": "2",
        "avgRatingString": "4.3",
        "totalRatingsString": "39K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-05-10 01:00:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-77ed5383-549a-4280-85af-9c9ac53f28c6"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/subway-telangana-himayath-nagar-rest12046",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "547809",
        "name": "Theobroma",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/2e550d59-51bc-41e9-bd4e-5931591a0e9b_547809.jpg",
        "locality": "Himayath Nagar",
        "areaName": "Himayath Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Desserts"
        ],
        "avgRating": 4.6,
        "parentId": "1040",
        "avgRatingString": "4.6",
        "totalRatingsString": "3.8K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 0.7,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "0.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-05-10 00:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
              "description": "bolt!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Desserts.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "15% OFF",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.7",
            "ratingCount": "146"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-77ed5383-549a-4280-85af-9c9ac53f28c6"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/theobroma-himayath-nagar-rest547809",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "2796",
        "name": "Blue Fox",
        "cloudinaryImageId": "67a049690883e2a8cc66975daa3e40fd",
        "locality": "Himayath Nagar",
        "areaName": "Himayath Nagar",
        "costForTwo": "₹800 for two",
        "cuisines": [
          "Biryani",
          "Chinese",
          "Tandoor"
        ],
        "avgRating": 4.4,
        "parentId": "48033",
        "avgRatingString": "4.4",
        "totalRatingsString": "55K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 1.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-05-09 22:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.0",
            "ratingCount": "4.2K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-77ed5383-549a-4280-85af-9c9ac53f28c6"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/blue-fox-himayath-nagar-rest2796",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "7003",
        "name": "Almond House",
        "cloudinaryImageId": "sewngcxy3c0h9atmav2l",
        "locality": "Himayath Nagar",
        "areaName": "Himayath Nagar",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Sweets",
          "Desserts",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 4.8,
        "veg": true,
        "parentId": "40",
        "avgRatingString": "4.8",
        "totalRatingsString": "20K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-05-09 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
              "description": "bolt!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Mithai.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Mithai.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹999",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.8",
            "ratingCount": "8.6K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-77ed5383-549a-4280-85af-9c9ac53f28c6"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/almond-house-himayath-nagar-rest7003",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "355747",
        "name": "Grameen Kulfi",
        "cloudinaryImageId": "mwggy9gmdboqzi7gloms",
        "locality": "KMIT",
        "areaName": "Narayanguda",
        "costForTwo": "₹120 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "12175",
        "avgRatingString": "4.7",
        "totalRatingsString": "1.6K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-05-09 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹399",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-77ed5383-549a-4280-85af-9c9ac53f28c6"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/grameen-kulfi-kmit-narayanguda-rest355747",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "25251",
        "name": "Meridian Restaurant",
        "cloudinaryImageId": "cxvuxxwpkicbqo3nkqiy",
        "locality": "Panjagutta",
        "areaName": "Panjagutta",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "Chinese",
          "Kebabs"
        ],
        "avgRating": 4.4,
        "parentId": "19276",
        "avgRatingString": "4.4",
        "totalRatingsString": "249K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 4.5,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-05-09 23:45:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {

        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.9",
            "ratingCount": "23K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-77ed5383-549a-4280-85af-9c9ac53f28c6"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/meridian-restaurant-panjagutta-rest25251",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "296084",
        "name": "Haiking Chinese Restaurant",
        "cloudinaryImageId": "3028bbfce92b7148ab80c8fd5edac81d",
        "locality": "Himayatnagar",
        "areaName": "Himayatnagar",
        "costForTwo": "₹700 for two",
        "cuisines": [
          "Chinese",
          "Asian",
          "Seafood",
          "Pan-Asian"
        ],
        "avgRating": 4.3,
        "parentId": "19206",
        "avgRatingString": "4.3",
        "totalRatingsString": "5.8K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-05-09 15:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
              "description": "bolt!"
            }
          ]
          }
      }
  }
]);
    return (
        <div className="Body">
            <div className="search">
                <button onClick={()=>{
                    resList=resList.filter((restaurant)=>restaurant.info.avgRating>4.5);
                    setRestoData(resList);
                }
                }
                >Top Rated Restaurant</button>
            </div>
            <div className="card-container">
             {resList.map((restaurant)=>(<RestoCard key={restaurant.info.id} restoCrad={restaurant}/>))}
             {/* <RestoCard  restoCrad={restoData}/> */}
            </div>
        </div>

    );
}
export default Body;