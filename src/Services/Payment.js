import {makeRequest} from "./api";
import Config from '../config.json';
// import {useCallback} from "react";

type shippingParams = {
    from_pincode: string,
    to_pincode: string,
    height: number,
    width: number,
    length: number,
    weight: number
}

type Configs = {
    key: string,
    amount: number,
    currency: string,
    name: string,
    order_id: string,
    prefill: {
        name: string,
        email: string,
        contact: string,
    },
    handler: () => void
};

export const CreateShippingOrder = (params: shippingParams) => {
    return makeRequest('POST', 'create-razorpay-order', params).then(res => {
        return res;
    }).catch(err => {
        return [];
    })
};

const LoadRazorPayJs = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
            window.razorpayLoaded = true;
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

export const StartPayment = async (options: Configs) => {
    if(!window.razorpayLoaded){
        let res = await LoadRazorPayJs(Config.RAZOR_PAY_JS);

        if (!res) {
            alert("Razorpay SDK failed to load. please check are you online?");
            return;
        }
    }

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}
