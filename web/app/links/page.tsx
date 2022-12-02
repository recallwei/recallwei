type Link = {
  title: string;
  url: string;
}

const LinksPage = (): JSX.Element => {
  const linkList:Link[]= []
  return (<div>
    Link
    <div>{linkList.map(item=><div>{item.title}{item.url}</div>)}</div>
  </div>);
};

export default LinksPage;
