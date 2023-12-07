<script>
  import { AccordionItem, Accordion } from 'flowbite-svelte';
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
  import {page} from '$app/stores'

  const origin = $page.url.origin
</script>

<div class="max-w-3xl mx-[auto] border-2 min-h-screen rounded text-center p-4 bg-slate-800">
    <h1 class="text-4xl pb-10">Grably</h1>
    
    <Accordion>
      <AccordionItem>
        <span slot="header">2embed</span>
        <Table striped={true} color='yellow' hoverable={true} class="rounded">
          <TableHead>
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>query</TableHeadCell>
            <TableHeadCell>example</TableHeadCell>
          </TableHead>
          <TableBody class="divide-y">
            <TableBodyRow>
              <TableBodyCell>TV</TableBodyCell>
              <TableBodyCell>{origin}/2embed/movie/<span class="text-xs text-red-500">[tmdb_id]</span></TableBodyCell>
              <TableBodyCell>
                <a href="/2embed/movie/tt0439572" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Click here</a>
              </TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell>Movie</TableBodyCell>
              <TableBodyCell>{origin}/2embed/tv/<span class="text-xs text-red-500">[tmdb_id]</span>/S<span class="text-xs text-red-500">[number]</span>/E<span class="text-xs text-red-500">[number]</span></TableBodyCell>
              <TableBodyCell>
                <a href="/2embed/tv/1396/S1/E1" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Click here</a>
              </TableBodyCell>
            </TableBodyRow>
          </TableBody>
        </Table>
      </AccordionItem>
    </Accordion>

</div>