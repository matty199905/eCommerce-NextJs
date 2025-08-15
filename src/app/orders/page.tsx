'use client';
import React, { useEffect } from 'react';
import { IconTimer, InstructionsContainer, OrderCard, OrdersContainer, OrdersWrapper } from './pageStyled';
import { RiTimer2Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { clearError, fetchOrdersStart, orderFail } from '../../Redux/Orders/ordersSlice';
import { getOrders } from '@/Axios/axiosOrders';
import { fetchOrdersEnd } from '@/Redux/Orders/ordersSlice';
import { useSelectorTS } from '@/Utils/constants';
import { AppDispatch } from '@/Redux/store';
import Loader from '@/UI/Loader/Loader';
import { useRouter } from 'next/navigation';





const Orders: React.FC = () => {

    const { orders, loading, error } = useSelectorTS(state => state.orders)
    const { currentUser } = useSelectorTS(state => state.user)
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()



    useEffect(() => {

        async function fetchData() {
            try {
                dispatch(fetchOrdersStart());

                await getOrders(currentUser?.token, dispatch);

                if (!currentUser?.token) {
                    dispatch(orderFail('Error al crear la orden, no se ha podido identificar su usuario.'));
                } else {
                    if (error) dispatch(clearError());
                }
                dispatch(fetchOrdersEnd());
            } catch (err) {
                dispatch(orderFail('Error obteniendo las órdenes.'));
            }
        }

        fetchData();
    }, [currentUser?.token,error, dispatch]);

    return (
        <OrdersWrapper>

            <h1>Mis Órdenes</h1>


            <OrdersContainer>


                {loading ? <Loader /> :
                    orders?.length ?

                        orders?.map((order) => (
                            <OrderCard
                                key={order._id}
                                onClick={() => {

                                    const fixedURLImgs = {
                                        ...order,
                                        items: order.items.map((item: any) => ({
                                            ...item,
                                            img: `/img/ProductsImg/Product-Id-${item.id}.jpg`
                                        }))
                                    };
                                    localStorage.setItem('selectedOrder', JSON.stringify(fixedURLImgs));

                                    router.push('/orders/orderOverview');
                                }}
                            >
                                <p>ID de la orden: <span>{order._id.slice(15)}</span></p>

                                <IconTimer>
                                    <RiTimer2Fill />
                                </IconTimer>
                            </OrderCard>
                        ))

                        :

                        orders?.length === 0 && <p>Aún no tienes órdenes pendientes.</p>
                }
            </OrdersContainer>



            <InstructionsContainer>
                <h3>Instrucciones a seguir:</h3>
                <p>Contactanos desde la seccion "Contactanos", indicando el <b>ID de la orden</b> y te enviaremos todos los datos para proseguir con la compra.</p>
            </InstructionsContainer>
        </OrdersWrapper>
    )
}

export default Orders
