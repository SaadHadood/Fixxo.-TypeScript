import React, {useEffect, useState} from 'react'
import './style.min.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import ContactsView from './views/ContactsView';
import CreateProductView from './views/CreateProductView';
import UpdateFormView from './views/UpdateProductView';
import ManageProductView from './views/ManageProductView';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import ShoppingCartView from './views/ShoppingCartView';
import WishListView from './views/WishListView';
import CompareView from './views/CompareView';
import SearchView from './views/SearchView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import CategoriesView from './views/CategoriesView';
import ShopNowView from './views/ShopNowView';
import FlasheSaleView from './views/FlasheSaleView'
import MainMenuSection from './sections/MainMenuSection';
import { ProductContext } from './contexts/contexts';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import ProductProvider from './contexts/ProductContext';
import DeleteProductView from './views/DeleteProductView';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <ShoppingCartProvider>
      <ProductProvider>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/categories" element={<CategoriesView />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/products/:id" element={<ProductDetailsView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/compare" element={<CompareView />} />
        <Route path="/wishlist" element={<WishListView />} />
        <Route path="/shoppingcart" element={<ShoppingCartView />} />
        <Route path="/shopnow" element={<ShopNowView />} />
        <Route path="/flashesale" element={<FlasheSaleView />} />
        <Route path="/manageproduct" element={<ManageProductView />} />
        <Route path="/createproduct" element={<CreateProductView />} />
        <Route path="/updateproduct/:id" element={<UpdateFormView />} />
        <Route path="/updateproduct" element={<UpdateFormView />} />
        <Route path="/deleteproduct" element={<DeleteProductView />} />

        <Route path="*" element={<NotFoundView />} />
      </Routes>
      </ProductProvider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
