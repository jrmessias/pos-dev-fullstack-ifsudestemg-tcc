import React from 'react';
import Icon from "@/components/Icon.js";

const Greeting = () => {
    const now = new Date();
    const hours = now.getHours();

    let config = {
        label: "",
        icon: null,
        color: ""
    };

    if (hours >= 5 && hours < 12) {
        config = {
            label: "Bom dia",
            icon: <Icon name={"Sun"} Sun className="w-6 h-6"/>,
            color: "text-yellow-500"
        };
    } else if (hours >= 12 && hours < 18) {
        config = {
            label: "Boa tarde",
            icon: <Icon name={"SunDim"} className="w-6 h-6"/>,
            color: "text-orange-500"
        };
    } else {
        config = {
            label: "Boa noite",
            icon: <Icon name={"Moon"} className="w-6 h-6"/>,
            color: "text-indigo-400"
        };
    }

    return (
        <span className={`inline-flex items-center gap-1.5 font-medium ${config.color}`}>
              {config.icon}
            {config.label}
        </span>
    );
};

export default Greeting;
