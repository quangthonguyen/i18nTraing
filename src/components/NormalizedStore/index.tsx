import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector} from '../../store/hook';
import { menusAsync, menusSelect } from '../../store/menu';


const NormalizedStore = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(menusAsync())
    }, [dispatch])

    const mainHeader = useAppSelector(state=>menusSelect.selectById(state.menus,'main-header'));

    console.log(mainHeader);

    return (
        <div>NormalizedStore</div>
    )
}

export default NormalizedStore