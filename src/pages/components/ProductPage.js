// components/ProductPage.js

import Head from 'next/head';

export default function ProductPage({ product }) {
  const { name, description, starting_bid, image_key_1, image_key_2, image_key_3 } = product;

  return (
    <div>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
      </Head>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>Starting Bid: ${starting_bid}</p>
      <div>
        <img src={image_key_1} alt="Product Image 1" />
        <img src={image_key_2} alt="Product Image 2" />
        <img src={image_key_3} alt="Product Image 3" />
      </div>
    </div>
  );
}
