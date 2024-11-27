import SectionHeader from "@components/SectionHeader/SectionHeader.jsx";
import ProductsSection from "@features/ProductsSection/ProductsSection.jsx";

export default function ProductPage() {
  return (
    <>
      <SectionHeader label="Products" />
      <ProductsSection />
    </>
  );
}
