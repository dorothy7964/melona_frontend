# 올 때 메로나
소액 대행 서비스 프로젝트 입니다. <br/><br/>
[backend Github 바로가기](https://github.com/dorothy7964/melona-backend "backend Github 바로가기") <br/>
[app Github 바로가기](https://github.com/dorothy7964/melona-app "app Github 바로가기")

<br/><br/>

### 주요 기능

1. 무한페이지
2. 구글 지도 API 사용
3. 웹소켓 통신을 활용한 실시간 채팅

<br/><br/>

### Frontend Stack

- React
- Apollo
- React Hooks
- styled-components

<br/><br/>


# Install

## styled-components

<!-- Install Code -->

``` js
$ yarn add styled-components
```

스타일을 가진 컴포넌트를 만들 수 있도록 도와주는 CSS-in-JS 라이브러리


### Example (styled-components)

<!-- Example Code -->

``` js
import React from 'react';

import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use them like any other React component – except they're styled!
<Wrapper>
  <Title>Hello World, this is my first styled component!</Title>
</Wrapper>
```

<br/><br/>

## styled-reset

<!-- Install Code -->

``` js
$ yarn add styled-reset
```

css 를 reset 해주는 라이브러리이며 전역 스타일로 src/Styles/GlobalStyles.js 에 적용하였습니다.

### Example (styled-reset)

<!-- Example Code -->

``` js
import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <div>Hi, I'm an app!</div>
  </React.Fragment>
}

export default App
```
      
<br/><br/>

## react-router-dom

<!-- Install Code -->

``` js
$ yarn add react-router-dom
```

리액트 라우터는 리액트의 서드파티 라이브러리로 화면전환을 도와주는 역할을 합니다.
     
<br/><br/>

## react-helmet

<!-- Install Code -->

``` js
$ yarn add react-helmet
```

페이지의 head 설정을 컴포넌트 렌더링하듯이 JSX 에서 할 수 있게 해주는 아주 유용한 라이브러리

### Example (react-helmet)

<!-- Example Code -->

``` js
import React from "react";
import {Helmet} from "react-helmet";

class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            ...
        </div>
    );
  }
};
```
      
<br/><br/>

## react-toastify

<!-- Install Code -->

``` js
$ yarn add react-toastify
```

알림 라이브러리입니다.

### Example (react-toastify)

<!-- Example Code -->

``` js
  import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  function App(){
    const notify = () => toast("Wow so easy !");

    return (
      <div>
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div>
    );
  }
```
      
<br/><br/>

## react-apollo-hooks

<!-- Install Code -->

``` js
$ yarn add react-apollo-hooks
```

GraphQL로 로컬 데이터와 원격 데이터를 모두 관리할 수 있는 자바스크립트용 종합 상태 관리 라이브러리<br/>
useQuery, useLazyQuery, useMutation, useSubscription 그리고 useApolloClient를 사용할 수 있습니다.

### Example (react-apollo-hooks)

<!-- Example Code -->

``` js
const FeedData({ type = "PUBLIC" }) {
const { loading, data, fetchMore } = useQuery(FEED_QUERY, {
    variables: {
      type: type.toUpperCase(),
      offset: 0,
      limit: 10
    },
  });

  // If you want your component to rerender with loading:true whenever
  // fetchMore is called, add notifyOnNetworkStatusChange:true to the
  // options you pass to useQuery above.
  if (loading) return <Loading/>;

  return (
    <Feed
      entries={data.feed || []}
      onLoadMore={() => fetchMore({
        variables: {
          offset: data.feed.length
        },
      })}
    />
  );
}
```
      
<br/><br/>

## apollo-boost

<!-- Install Code -->

``` js
$ yarn add apollo-boost
```

Apollo Client를 설정하는 데 필요한 모든 것을 포함하는 패키지이며, <br/>
apollo-boost가 Apollo client를 쉽게 사용할 수 있게 해주는 라이브러리 입니다.

### Example (apollo-boost)

<!-- Example Code -->

``` js
import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
 
// Pass your GraphQL endpoint to uri
const client = new ApolloClient({ uri: 'https://nx9zvp49q7.lp.gql.zone/graphql' });
 
const ApolloApp = AppComponent => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
);
 
render(ApolloApp(App), document.getElementById('root'));
```
      
<br/><br/>

## graphql

<!-- Install Code -->

``` js
$ yarn add graphql
```

GraphQL.js는 유형 스키마 구축과 해당 유형 스키마에 대한 쿼리 제공하는 라이브러리

### Example (graphql)

<!-- Example Code -->

``` js
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
 
var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        },
      },
    },
  }),
});
```
      
<br/><br/>

# GlobalStyles and Theme

GlobalCSS는 모든 태그에 적용 되는 style을 작성하는 것이고, 기존 styled-components 방식으로 작성하였습니다.

<!-- Example Code -->

``` js
// ~/wam-prj/melona-frontend/src/Styles/GlobalStyles.js 

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    * {
        box-sizing: border-box;
    }
    body {
        background-color:${props => props.theme.bgColor};
        color:${props => props.theme.blackColor};
        font-size:14px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding-top: 140px;
        /* Scrollbar None */
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        ::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera*/
        }
    }
    a {
        color:${props => props.theme.blueColor};
        text-decoration:none;
    }
    input:focus {
        outline:none;
    }
`;
```

<br/><br/>

Theme은 프로젝트에 사용될 색상코드,스타일 과 같은 자주 사용되는 정보들을 저장해놓는 곳 입니다.

<!-- Example Code -->

``` js
// ~/wam-prj/melona-frontend/src/Styles/Theme.js 

const BORDER_COLOR = "#e6e6e6"
const BOX_BORDER = `1px solid ${BORDER_COLOR}`;
const BORDER_RADIUS = "4px";

export default {
    minHeight: "60vh",
    maxWidthLarge: "935px",
    maxWidthMiddle: "768px",
    maxWidthSmall: "576px",
    bgColor: "#FAFAFA",
    blackColor: "#262626",
    greenColor: "#06703b",
    melonaColor: "#b9dd39",
    lightGreenColor: "#9ccc65",
    titleGreyColor: "#f2f0f0",
    lightGreyColor: "#eeeeee",
    darkGreyColor: "#999",
    redColor: "#ED4956",
    darkBlueColor: "#003569",
    borderColor: `${BORDER_COLOR}`,
    boxBorder: `1px solid ${BORDER_COLOR}`,
    borderRadius: "4px",
    shadowBox: `background-color:white; 
                -webkit-box-shadow: 20px 20px 8px -13px rgba(230,230,230,0.37);
                -moz-box-shadow: 20px 20px 8px -13px rgba(230,230,230,0.37);
                box-shadow: 20px 20px 8px -13px rgba(230,230,230,0.37);
                `,
    shadowBox_bottom: `
                -webkit-box-shadow: 0px 14px 22px -3px rgba(230,230,230,0.25);
                -moz-box-shadow: 0px 14px 22px -3px rgba(230,230,230,0.25);
                box-shadow: 0px 14px 22px -3px rgba(230,230,230,0.25);
                `,
    whiteBox: `border:${BOX_BORDER};
               border-radius:${BORDER_RADIUS};
               background-color:white; 
               `,
    whiteBox_bottom: `border-bottom:${BOX_BORDER};
               border-radius:${BORDER_RADIUS};
               background-color:white;
               `
};
```

<br/><br/>

App 파일에 연결해 주었습니다.

<!-- Example Code -->

``` js
// ~/wam-prj/melona-frontend/src/Components/App.js 

import React from "react";
import { ThemeProvider } from "styled-components"; 
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from "../Styles/Theme"; 

export default () => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
        </ThemeProvider>
    );
};
```

<br/><br/>

# Apollo Client & websoket

Apollo Client 는 JavaScript 앱을위한 완벽한 상태 관리 라이브러리 <br/>
GraphQL 쿼리를 작성하기 만하면 Apollo Client가 데이터를 요청하고 캐싱하고 UI를 업데이트합니다.

<br/>

**Apollo에서 제공하는 GraphQL 클라이언트 관련 라이브러리**
- apollo-client
- apollo-cache-inmemory
- apollo-link-http

<br/>

**Facebook에 정의한 GraphQL 스팩을 JavaScript 언어로 구현체**

- graphql

<br/>


**GraphQL 쿼리를 파싱해주는 템플릿 리터럴 태그**

- graphql-tag

<br/><br/>

## 클라이언트 생성하기

Apollo Client를 사용하려면 먼저 ApolloClient 객체를 생성해야 합니다. <br/>
ApolloClient 생성자는 옵션 객체를 인자로 받는데, 이 객체의 link와 cache는 필수 옵션입니다.

<br/>

<!-- Example Code -->

``` js
const client = new ApolloClient({
  link: createHttpLink({ uri: "https://countries.trevorblades.com" }),
  cache: new InMemoryCache()
});
```

<br/>

- link 옵션에는 ApolloLink 객체를 넘거야 합니다.
- cache 옵션에는 ApolloCache 객체를 넘거야 합니다.

<br/>

- **createHttpLink**는 HTTP를 통해 원격 GraphQL 서버와 연동할 수 있도록 HttpLink 객체를 생성해주는 팩토리 함수입니다.
- 이 함수의 인자로 연동할 GraphQL 서버의 uri를 설정해줘야 합니다.
- 특별한 캐시 요구사항이 없다면 대부분의 경우, 가장 기본적인 InMemoryCache 옵션을 사용합니다. 

<br/><br/>

## Header 적용

- HTTP를 사용할 때 자신을 식별하는 또 다른 일반적인 방법은 권한 부여 Header를 따라 보내는 것 입니다. 
- `authorization` Apollo Links를 함께 연결하여 모든 HTTP 요청에 헤더를 쉽게 추가 할 수 있습니다. 
- 이 예에서는 `localStorage`요청이 전송 될 때마다 로그인 토큰을 가져옵니다. 

<br/>

**apollo-link-context 설치하기**

<!-- Install Code -->

``` js
$ yarn add apollo-link-context
```

<br/>

**Example - apollo-link-context**

<!-- Example Code -->

``` js
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // 로컬 저장소에서 인증 토큰이 있으면 가져옵니다.
  const token = localStorage.getItem('token');
  // httpLink가 읽을 수 있도록 컨텍스트에 헤더를 리턴하십시오.
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
```

- 위의 예는 `apollo-client` 패키지에서 `ApolloClient`를 사용하고 있습니다.
- Header는 여전히 apollo-boost 패키지에서 ApolloClient를 사용하여 수정할 수 있지만,apollo-boost는 사용하는 httpLink 인스턴스를 수정할 수 없으므로 헤더를 구성 매개 변수로 전달 해야 합니다.

<br/>

**apollo-link-context의 setContext  설명** <br/>

<!-- Example Code -->

``` js
import { setContext } from "apollo-link-context";

const setAuthorizationLink = setContext((request, previousContext) => ({
  headers: {authorization: "1234"}
}));

const asyncAuthLink = setContext(
  request =>
    new Promise((success, fail) => {
      // do some async lookup here
      setTimeout(() => {
        success({ token: "async found token" });
      }, 10);
    })
);
```

- **setContext**함수는 오브젝트를 리턴하는 함수 또는 오브젝트를 리턴하여 요청의 새 컨텍스트를 설정하는 약속을 가져옵니다.
- 실행되는 GraphQL 요청과 이전 컨텍스트의 두 가지 인수를받습니다.
- 이 링크를 사용하면 인증 토큰 등과 같은 항목을 비동기식으로 쉽게 조회 할 수 있습니다.

<br/><br/>

## ApolloCache

<!-- Example Code -->

``` js
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();
cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('token'),
    cartItems: [],
  },
});
```

<br/>

- cache를 업데이트하는 가장 쉬운 방법은 with `cache.writeData`를 사용하여 쿼리를 전달하지 않고 cache에 직접 데이터를 쓸 수 있습니다. 
- `writeData({ id, data })`
쿼리를 전달하지 않고 cache의 루트에 직접 데이터를 씁니다.
- 초기 데이터로 캐시를 준비하는 데 좋습니다. 
- cache의 기존 항목에 데이터를 쓰려면 항목의 cache key를 id로 전달해야 합니다.

<br/><br/>

## React에 Apollo Client 연결

@apollo/react-hooks 패키지는 useQuery, useMutation, useApolloClient와 같은 React Hooks 함수를 제공하며, 이 함수들을 활용하면 React 앱에서 GraphQL API를 훨씬 쉽게 호출할 수 있습니다.

<br/>

**apollo Hook 추가로 라이브러리 설치하기**

- @apollo/client
- @apollo/react-hooks

<!-- Install Code -->

``` js
$ yarn add @apollo/client @apollo/react-hooks
```

<br/>

**프로젝트에 이미 존재하는 react-apollo의 ApolloProvider와 함께 사용할 때**

``` js
// ~/wam-prj/prismagram-frontend/src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import App from './Components/App';
import Client from "./Apollo/Client";  

ReactDOM.render(
    <ApolloProvider client={Client}>
        <ApolloHooksProvider client={Client}>
            <App />
        </ApolloHooksProvider>
    </ApolloProvider>,
    document.getElementById("root")
);
```

<br/><br/>

## Apollo Client - Subscriptions (websocket)

### GraphQL 구독 전송 설명

- **클라이언트에 구독**을 추가하는 첫 번째 단계는 클라이언트와 서버가 통신 할 WebSocket 연결을 설정하는 것 입니다.  
- WebSocket 연결을 형성하고 유지하는 것은에 정의 된 Apollo 네트워크 인터페이스의 작업 입니다. 
- 기존 인터페이스에 **WebSocket 지원을 추가하기 위해** GraphQL Subscription 클라이언트를 구성하고 이를 기존 네트워크 인터페이스와 병합하여 HTTP를 통해 **일반 GraphQL 쿼리를 수행**하고 **WebSocket을 통해 구독 쿼리를 수행**하는 새 인터페이스를 생성합니다.

<br/>

### Subscriptions 설명

- GraphQL 구독으로 실시간 데이터를 얻는 방법 입니다. 
- GraphQL 사양은 **Query**를 사용하여 데이터를 가져오고 **Mutation** 을 사용하여 데이터를 수정하는 것 외에도 구독(Subscriptions)이라는 세 번째 작업 유형을 지원합니다.
- GraphQL 구독(Subscriptions)은 서버에서 클라이언트로 실시간 메시지를 수신하도록 선택한 데이터를 서버에서 클라이언트로 푸시하는 방법입니다. 
- 구독은 클라이언트에 전달할 필드 세트를 지정한다는 점에서 **쿼리와 유사**하지만 단일 응답을 즉시 리턴하는 대신 서버에서 특정 이벤트가 발생할 때마다 결과가 전송 됩니다. 
- 구독의 일반적인 사용법은 클라이언트 측에 특정 이벤트 (예 : 새 객체 작성, 업데이트 된 필드 등)에 대해 알리는 것 입니다. 

<br/>

### Client 설정

- 오늘날 GraphQL 구독에 가장 많이 사용되는 전송 방식은 subscriptions-transport-ws 입니다.
- 이 패키지는 Apollo 커뮤니티에서 관리하지만 모든 클라이언트 또는 서버 GraphQL 구현과 함께 사용할 수 있습니다.
- Graphcool 또는 Scaphold와 같은 서비스로 GraphQL 백엔드를 사용하는 경우 JavaScript 서버에서 구독을 사용하는 방법에 대해 읽거나 즉시 사용 가능한 구독을 즐길 수 있습니다.

<br/>

**라이브러리 설치**

- apollo-link-ws 
- subscriptions-transport-ws

<!-- Install Code -->

``` js
$ yarn add apollo-link-ws subscriptions-transport-ws
```

<br/>

**이 전송에 대한 지원을 Apollo Client에 추가하는 방법**

<!-- Example Code -->

``` js
import { WebSocketLink } from 'apollo-link-ws';

const wsLink = new WebSocketLink({
  uri: `ws://localhost:5000/`,
  options: {
    reconnect: true
  }
});
```

<!-- Example Code -->

``` js
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

// Create an http link:
const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql'
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `ws://localhost:5000/`,
  options: {
    reconnect: true
  }
});

// 링크 분할 기능을 사용하여 각 링크에 데이터를 보낼 수 있습니다
// 어떤 종류의 작업이 전송되는지에 따라
const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);
```

<br/>

 Query와 Mutation 이 정상적으로 HTTP를 통과하지만 구독(Subscriptions)은 웹 소켓 전송을 통해 수행이 가능해 집니다.

<br/><br/>

## 무한 페이지  Pagination(Offset-based)

### 무한 스크롤 라이브러리 설치

<!-- Install Code -->

``` js
$ yarn add react-infinite-scroll-component
```

<br/>

**무한 스크롤 사용법**

``` js
<InfiniteScroll
  dataLength={items.length} //This is important field to render the next data
  next={fetchData}
  hasMore={true}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{textAlign: 'center'}}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  // below props only if you need pull down functionality
  refreshFunction={this.refresh}
  pullDownToRefresh
  pullDownToRefreshContent={
    <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
  }
  releaseToRefreshContent={
    <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
  }>
  {items}
</InfiniteScroll>
```

<br/>

- **스크롤 가능한 컨텐츠가 특정 높이를 가지도록하려면** 컨텐츠를 스크롤하고 더 많은 데이터를 페치하기위한 스크롤 막대를 제공하여 높이 소품 값을 지정하십시오.
- **오버플로 스크롤 막대를 이미 제공하는 부모 요소 내에서 스크롤 가능한 내용을 렌더링하는 경우** scrollableTarget 소품을 설정하여 DOM 요소를 참조하고 더 많은 데이터를 가져 오기 위해 스크롤 막대를 사용할 수 있습니다.
- **높이 또는 scrollableTarget 소품을 설정하지 않으면** Facebook의 타임 라인 스크롤과 같은 document.body에서 스크롤이 발생합니다.

<br/>

### 로딩 라이브러리 설치

<!-- Install Code -->

``` js
$ yarn add react-spinners @emotion/core
```

이 패키지는 [emotion](https://github.com/emotion-js/emotion) 을 사용합니다. 

<br/>

**로딩 사용법**

각 로더는 로딩 소품을 `bool` 로 받아 들입니다. <br/>
로딩이 `false`이면 로더는 null을 렌더링 합니다.


<br/>

**.babelrc에 플러그인을 추가**

<!-- Example Code -->

``` js
{
    "presets": ["@babel/preset-react", "@babel/preset-env"],
    "plugins": ["emotion"]
}
```

<br/>

**spinners 예제**

<!-- Example Code -->

``` js
import React from "react";
import { css } from "@emotion/core";
// First way to import
import { ClipLoader } from "react-spinners";
// Another way to import. This is recommended to reduce bundle size
import ClipLoader from "react-spinners/ClipLoader";
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
 
class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
 
  render() {
    return (
      <div className="sweet-loading">
        <ClipLoader
          css={override}
          size={150}
          //size={"150px"} this also works
          color={"#123abc"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}
```

<br/>

**emotion 예제**

<!-- Example Code -->

``` js
/** @jsx jsx */
import { jsx, css, Global, ClassNames } from '@emotion/core'
 
render(
  <div css={{ color: 'hotpink' }}>
    <div
      css={css`
        color: green;
      `}
    />
    <Global
      styles={{
        body: {
          margin: 0,
          padding: 0
        }
      }}
    />
    <ClassNames>
      {({ css, cx }) => (
        <div
          className={cx(
            'some-class',
            css`
              color: yellow;
            `
          )}
        />
      )}
    </ClassNames>
  </div>
)
```

<br/>

### 페이지 매김 사용해서 fetchMore 이용해 데이터 업데이트 하기

<!-- Example Code -->

``` js
const [hasMore, setHasMore] = useState(true);

const onLoadMore = () => {
    fetchMore({
        variables: {
            pageNumber: data.paginateFeed.length,
            items
        },
        updateQuery: (prev, { fetchMoreResult }) => {
            console.log('prev', fetchMoreResult);
            if (!fetchMoreResult) {
                setHasMore(false);
                return prev;
            }
            if (fetchMoreResult.paginateFeed.length < items) {
                setHasMore(false);
            }
            return Object.assign({}, prev, {
                paginateFeed: [...prev.paginateFeed, ...fetchMoreResult.paginateFeed]
            });
        }
    })
}
```

<br/>

**updateQuery**       

추가된 데이터가 없거나 items 수가 4개 이하이면
무한 스크롤을 실행하지 않기 위해 hasMore state 에 bool 을 넣어줍니다.

          
<!-- Example Code -->

```js
 paginateFeed: [...prev.paginateFeed, ...fetchMoreResult.paginateFeed]
```

paginateFeed 에  `...prev.paginateFeed`  이전 결과 값과   `...fetchMoreResult.paginateFeed`  새로 받아온 값을 합쳐주어 return  해줍니다.

<br/><br/>


# 구글 지도 API 사용

### 설치

<!-- Install Code -->

``` js
$ yarn add @material-ui/lab
$ yarn add autosuggest-highlight
```

<br/>

<!-- Example Code -->

### 코드 적용

``` js
// ~/wam-prj/melona-frontend/src/Components/GoogleMaps.js

import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";     // [2] LocationMap  - flex style
import GoogleMapInfo from "./GoogleMapInfo";    // [1] GoogleMapInfo
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';
import Env from "../Env";

// [2] LocationMap  - flex style
const LocationMap = styled.div`
    display: flex;
    flex-diraction: row;
`;

function loadScript(src, position, id) {
    if (!position) {
        return;
    }

    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', id);
    script.src = src;
    position.appendChild(script);
}

const autocompleteService = { current: null };

const useStyles = makeStyles(theme => ({
    icon: {
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(2),
    },
}));

export default function GoogleMaps({ mapLabel="지역", route }) {   // [1] GoogleMapInfo
    const classes = useStyles();
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState([]);
    const loaded = React.useRef(false);
    
    if (typeof window !== 'undefined' && !loaded.current) {
        if (!document.querySelector('#google-maps')) {
            loadScript(
                `https://maps.googleapis.com/maps/api/js?key=${Env.GOOGLEAPI}&libraries=places`,
                document.querySelector('head'),
                'google-maps',
            );
        }

        loaded.current = true;
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const fetch = React.useMemo(
        () =>
            throttle((request, callback) => {
                autocompleteService.current.getPlacePredictions(request, callback);
            }, 200),
        [],
    );

    React.useEffect(() => {
        let active = true;
      
        if (!autocompleteService.current && window.google) {
            autocompleteService.current = new window.google.maps.places.AutocompleteService();
        }
        if (!autocompleteService.current) {
            return undefined;
        }

        if (inputValue === '') {
            setOptions([]);
        return undefined;
    }

    fetch({ input: inputValue }, results => {
        if (active) {
            setOptions(results || []);
        }
    });

    return () => {
        active = false;
    };
  }, [inputValue, fetch]);

    return (
        <Autocomplete
            id="google-map-demo"
            style={{ width: "80%"}}
            getOptionLabel={option => (typeof option === 'string' ? option : option.description)}
            filterOptions={x => x}
            options={options}
            autoComplete
            includeInputInList
            renderInput={params => (
                <!-- [2] LocationMap  - flex style -->
                <LocationMap>
                    <TextField
                        {...params}
                        label={mapLabel}
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                    />
                    <!-- [1] GoogleMapInfo -->
                    <GoogleMapInfo 
						params={params.inputProps.value}
                        route={route}
                    />
                </LocationMap>
             )}
            renderOption={option => {
                const matches = option.structured_formatting.main_text_matched_substrings;
                const parts = parse(
                    option.structured_formatting.main_text,
                    matches.map(match => [match.offset, match.offset + match.length]),
                );

                return (
                    <Grid container alignItems="center">
                        <Grid item>
                            <LocationOnIcon className={classes.icon} />
                        </Grid>
                        <Grid item xs>
                            {parts.map((part, index) => (
                                <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                                    {part.text}
                                </span>
                            ))}

                            <Typography variant="body2" color="textSecondary">
                                {option.structured_formatting.secondary_text}
                            </Typography>
                        </Grid>
                    </Grid>
                );
            }}
        />
    );
}

GoogleMaps.propTypes = {
    mapLabel : PropTypes.string,
    route : PropTypes.string.isRequired,
};
```

- [1] GoogleMapInfo   -  작성한 주소 가져오려고 만들었습니다.
- [2] LocationMap  - flex style

<br/><br/>