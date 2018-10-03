

const GetDetailsPhones = () => {

    const getDetailsURL = 'https://codechallengemovejeroapi.azurewebsites.net/api/Phones';

    return fetch(getDetailsURL).then(response => (response.json())).then(mapPhoneModel);
};

const mapPhoneModel = (response)=> {
    const result = [];
    response.forEach((item) => {
        const phoneMap = {
            IdPhone: item.idPhone,
            NamePhone: item.namePhone,
            Image: item.image,
            Color: item.color,
            Price: item.price,
            Description: item.description,
        };
        result.push(phoneMap);
    });
    return result;
};

export const phonesAPI = {
    GetDetailsPhones,
};