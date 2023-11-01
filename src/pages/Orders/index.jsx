import * as React from 'react'; 
import { Helmet } from 'react-helmet-async';
import { UserView } from 'src/components/Order_table/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <UserView />
    </>
  );
}
