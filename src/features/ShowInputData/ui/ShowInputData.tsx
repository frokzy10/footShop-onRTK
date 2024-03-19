import React, {useEffect} from 'react';
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {dropdownSelectors} from "../../../entities/DropDown";
import {getDropDown} from "../../../entities/DropDown/model/services/getDropDown";
import Input from "../../../widgets/Input/ui/Input";

const ShowInputData = () => {
    const dispatch = useAppDispatch();
    const data = useSelector(dropdownSelectors.getDropdownData);

    useEffect(() => {
        dispatch(getDropDown())
    }, [dispatch]);


    return (
        <div>
            <Input data={data}/>
        </div>
    );
};

export default ShowInputData;