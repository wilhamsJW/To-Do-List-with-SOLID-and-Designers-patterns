"use client";

import { QueryClient, QueryClientProvider, Hydrate  } from 'react-query';
import { ReactNode } from 'react';
import { DehydratedState } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools'; 
{/**Uso deve ser feito apenas em ambiente de desenvolvimento */}

const queryClient = new QueryClient();

interface ClientQueryProviderProps {
  children: ReactNode;
  dehydratedState?: any;
}

const ClientQueryProvider = ({ children, dehydratedState }: ClientQueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        {children}
      </Hydrate>
      {/* <ReactQueryDevtools initialIsOpen={false}/>  */}
      {/* *Uso deve ser feito apenas em ambiente de desenvolvimento */}
    </QueryClientProvider>
  );
};

export default ClientQueryProvider;

/**
 * O `ClientQueryProvider` é utilizado para envolver a aplicação com o `QueryClientProvider` do React Query.
 * Isso é necessário porque o `QueryClientProvider` requer um ambiente de cliente para funcionar corretamente.
 * Como o Next.js permite a execução de código no servidor e no cliente, envolver a aplicação com um componente
 * específico para o cliente garante que o `QueryClientProvider` seja usado apenas no lado do cliente,
 * evitando erros de execução no lado do servidor.
 */

/**
 * dehydratedState: Este estado é passado do lado do servidor (por exemplo, de getServerSideProps ou getStaticProps 
 * em Next.js) e usado pelo Hydrate para preencher o cache do React Query com dados já carregados.
 */


