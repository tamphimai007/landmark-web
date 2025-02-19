// rafce
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Breadcrums = ({ name }) => {
  //   console.log(name);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{name}</BreadcrumbPage>
        </BreadcrumbItem>
        
      </BreadcrumbList>
    </Breadcrumb>
  );
};
export default Breadcrums;
