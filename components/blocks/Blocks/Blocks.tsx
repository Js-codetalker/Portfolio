import { IPortfolioProjectsList } from "@cms/types";
import { PortfolioProjectsList } from "..";

interface BlocksProps {
  blocks: any[];
}

const Blocks: React.FC<BlocksProps> = ({ blocks }) => {
  const renderBlock = (block: IPortfolioProjectsList) => {
    const id = block.sys.id;
    const contentType = block.sys.contentType.sys.id;
    switch (contentType) {
      case "portfolioProjectsList":
        return <PortfolioProjectsList key={id} data={block.fields} />;
      default:
        break;
    }
  };

  return <div>{blocks.map((block) => renderBlock(block))}</div>;
};

export default Blocks;
