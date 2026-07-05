function applyFilters() { 
  const searchTerm = 
document.getElementById('searchInput').value.trim().toLowerCase(); 
  const filterValue = document.getElementById('filterStatus').value; 
 
  let filtered = children; 
 
  if (searchTerm) { 
    filtered = filtered.filter(child => 
      child.name.toLowerCase().includes(searchTerm) || 
      child.school.toLowerCase().includes(searchTerm) 
    ); 
  } 
 
  if (filterValue === 'owing') { 
    filtered = filtered.filter(child => child.totalFees > child.paid); 
  } else if (filterValue === 'paid') { 
    filtered = filtered.filter(child => child.totalFees <= child.paid); 
  } 
 
  renderList(filtered);
} 
 
function initSearch() { 
  document.getElementById('searchInput').addEventListener('input', applyFilters); 
  document.getElementById('filterStatus').addEventListener('change', applyFilters); 
} 
