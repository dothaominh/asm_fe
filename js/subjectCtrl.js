window.subjectCtrl = function($scope, $http,$routeParams){
    var page = $routeParams.page;
    var perPage = $routeParams.perPage;
    console.log(page);

    var apiUrl = "http://localhost:3000/subjects";
    $scope.list_subject = [];
    $http.get(`${apiUrl}?_page=${page}&_per_page=${perPage}`).then(function(reponse){
        console.log(reponse);
        $scope.list_subject = reponse.data.data;
    })
}
