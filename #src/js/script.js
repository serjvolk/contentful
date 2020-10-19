/* ====================== Прочитать данные =============================
var contentfulClient = contentful.createClient({
  accessToken: '6UNjMazcba2DcR256vaXJF6vfde0rGHjvnWF-OXqLpY',
  space: 'powp75ntfunj'
});

var PRODUCT_CONTENT_TYPE_ID = 'svoneJson';

var container = document.getElementById('content');

contentfulClient.getEntries({
    content_type: PRODUCT_CONTENT_TYPE_ID
  })
  .then(function(entries) {
  	console.log(entries.items[1].fields.monsterEnergy.name);
    //container.innerHTML = renderProducts(entries.items)
  });
*/

/* ==================== Прочитать данные ==========================
const client = contentful.createClient({
  space: 'powp75ntfunj',
  environment: 'master', // defaults to 'master' if not set
  accessToken: '6UNjMazcba2DcR256vaXJF6vfde0rGHjvnWF-OXqLpY'
})

client.getEntry('3DZBHimqYJJ0EdA2CKkJIg')
.then((entry) => console.log(entry.fields.monsterEnergy.kci))
.catch(console.error)
*/

/* ============= Получить список пространств ========================
client.getSpace('powp75ntfunj')
.then((space) => space.getEnvironment('master'))
.then((environment) => environment.getEntry('3DZBHimqYJJ0EdA2CKkJIg'))
.then((entry) => {
  entry.fields.title['en-US'] = 'New entry title'
  return entry.update()
})
.then((entry) => console.log(`Entry ${entry.sys.id} updated.`))
.catch(console.error)
*/

const client = contentful.createClient({
  accessToken: 'CFPAT-RHLeCOVpvJk6mliImsuFqHx5tFjd7SwEC1uaP2wgs8A'
});

client.createSpace({
  name: 'NameNewSpace'
})
.then((space) => console.log(space))
.catch(console.error)













/*
function renderProducts(products) {
  return '<h1>Products hello</h1>' +
    '<div class="products">' +
    products.map(renderSingleProduct).join('\n') +
    '</div>'
}

function renderSingleProduct(product) {
  var fields = product.fields
  console.log(fields)
  return '<div class="product-in-list">' +
    '<div class="product-image">' +
    renderImage(fields.image[0], fields.slug) +
    '</div>' +
    '<div class="product-details">' +
    renderProductDetails(fields) +
    '</div>' +
    '</div>'
}

function renderProductDetails(fields) {
  return renderProductHeader(fields) +
    '<p class="product-categories">' +
    fields.categories.map(function(category) {
      return category.fields.title
    }).join(', ') +
    '</p>' +
    '<p>' + marked(fields.productDescription) + '</p>' +
    '<p>' + fields.price + ' &euro;</p>' +
    '<p class="product-tags"><span>Tags:</span> ' + fields.tags.join(', ') + '</p>'
}

function renderProductHeader(fields) {
  return '<div class="product-header">' +
    '<h2>' +
    '<a href="product/' + fields.slug + '">' +
    fields.productName +
    '</a>' +
    '</h2>' +
    ' by ' +
    '<a href="brand/' + fields.brand.sys.id + '">' + fields.brand.fields.companyName + '</a>' +
    '</div>'
}

function renderImage(image, slug) {
  if (image && image.fields.file) {
    return '<a href="product/' + slug + '">' +
      '<img src="' + image.fields.file.url + '" width="150" height="150" />' +
      '</a>'
  } else {
    return ''
  }
}
*/