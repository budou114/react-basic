import Article from "./components/Article";

function App() {
  return (
    <div>
      <Article
        title={'新・日本一わかりやすいReact入門基礎編4'}
        content={'今日のトピックはpropsのデータの受け渡しについて'}
      />
      <Article
        title={'新・日本一わかりやすいReact入門基礎編5'}
        content={'今日のトピックはuseStateについて'}
      />
      <Article
        title={'新・日本一わかりやすいReact入門基礎編6'}
        content={'今日のトピックはuseEffectについて'}
      />
    </div>
  );
}

export default App;
