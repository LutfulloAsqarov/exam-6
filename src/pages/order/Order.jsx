import React from "react";
import UpTab from "../../components/up-tab/UpTab";
import { Outlet } from "react-router-dom";

const Order = () => {
    return (
        <div className="order">
            <UpTab />
            <Outlet />
        </div>
    );
};

export default Order;
