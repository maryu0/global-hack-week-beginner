#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main() {
    vector <int> numbers={12,5,9,1,8,3};
    sort(numbers.begin(), numbers.end());
    cout<<"Sorted List: ";
    for(int num:numbers){
        cout<<num<<" ";
    }
    return 0;
}

