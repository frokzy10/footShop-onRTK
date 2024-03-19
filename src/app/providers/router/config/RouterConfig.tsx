import MainPage from "../../../../pages/MainPage/ui/MainPage";
import NotFound from "../../../../pages/NotFoundPage/ui/NotFound";
import {RouteProps} from "react-router/dist/lib/components";
import ProductListPage from "../../../../pages/ProductListPage/ui/ProductListPage";
import ProductDetailsPage from "../../../../pages/ProductById/ui/ProductDetailsPage";
import {AuthPage} from "../../../../pages/AuthPage";
import AddCartPage from "../../../../pages/CartPage/ui/AddCartPage";
import AuthRouter from "../../../../features/AuthRouter/ui/AuthRouter";
import ProductBuyPage from "../../../../pages/ProductBuy/ui/ProductBuyPage";

enum AppRoutes {
    MAIN = "main",
    PRODUCT_LIST = "product_list",
    PRODUCT_DETAILS = "product_details",
    PRODUCT_BUY = "product_buy",
    AUTH = "auth",
    CART_PAGE = "cart",
    NOT_FOUND = "not_found"
}

export type AppRouteProps = RouteProps & {}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.PRODUCT_LIST]: "/product_list",
    [AppRoutes.PRODUCT_DETAILS]: "/product_details/:id",
    [AppRoutes.AUTH]: "/auth",
    [AppRoutes.CART_PAGE]: "/cart",
    [AppRoutes.PRODUCT_BUY]: "/product_details/buy",

    // Not FOUND
    [AppRoutes.NOT_FOUND]: "*"
}


export const routerConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage/>,
    },
    [AppRoutes.PRODUCT_LIST]: {
        path: RoutePaths.product_list,
        element: <ProductListPage/>
    },
    [AppRoutes.PRODUCT_DETAILS]: {
        path: RoutePaths.product_details,
        element: <ProductDetailsPage/>
    },
    [AppRoutes.CART_PAGE]: {
        path: RoutePaths.cart,
        element: <AddCartPage/>
    },
    [AppRoutes.PRODUCT_BUY]:{
      path:RoutePaths.product_buy,
      element: <AuthRouter>
          <ProductBuyPage/>
      </AuthRouter>
    },
    [AppRoutes.AUTH]: {
        path: RoutePaths.auth,
        element: <AuthPage/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.not_found,
        element: <NotFound/>
    }
}
