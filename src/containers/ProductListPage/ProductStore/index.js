import React, { useEffect, useState } from 'react'
//import { getProductPage } from '../../../actions/product.action';
// import Layout from '../../components/Layout';
import Card from "../../../components/UI/Card";
import { Link } from "react-router-dom";
import { generatePublicUrl } from '../../../urlConfig';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsBySlug } from '../../../actions';
import { MaterialButton } from '../../../components/MaterialUI';
import Rating from '../../../components/UI/Rating';
import Price from '../../../components/UI/Price';
import "./style.css";

/**
* @author
* @function ProductStore
**/

const ProductStore = (props) => {
  const product = useSelector(state => state.product);
  const [priceRange, setPriceRange] = useState({
    under5K: 5000,
    under10K: 10000,
    under20K: 20000,
    under30K: 30000
  });
  const dispatch = useDispatch();
  
  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);

  return (
    <>
      {
        Object.keys(product.productsByPrice).map((key, index) => {
          return (
            <Card
            headerLeft={`${props.match.params.slug} mobile under ${priceRange[key]}`}
            headerRight={
              <MaterialButton
                title={"VIEW ALL"}
                style={{
                  width: "96px",
                }}
                bgColor="#2874f0"
                fontSize="12px"
              />
            }
            style={{
              width: "calc(100% - 40px)",
              margin: "20px",
            }}
          >
              <div style={{ display: 'flex' }}>
                {
                  product.productsByPrice[key].map(product =>
                    <Link
                      to={`/${product.slug}/${product._id}/p`}
                      style={{
                        display: "block",
                        textDecoration: "none",
                        color: "#000",
                      }}
                      className="productContainer"
                    >
                      <div className="productImgContainer">
                        <img alt="#" src={generatePublicUrl(product.productPictures[0].img)} />
                      </div>
                      <div className="productInfo">
                        <div style={{ margin: '10px 0' }}>{product.name}</div>
                        <div>
                        <Rating value="4.3" />
                      &nbsp;&nbsp;
                      <span
                        style={{
                          color: "#777",
                          fontWeight: "500",
                          fontSize: "12px",
                        }}
                      >
                        (3353)
                      </span>
                        </div>
                        <Price value={product.price} />
                      </div>
                    </Link>)
                }

              </div>
            </Card>
          )
        })
      }

    </>
  )

}

export default ProductStore