#include<iostream>
#include <ctime>

using namespace std;

unsigned int customRandom(unsigned int seed, unsigned int range){
    seed=(seed*1103515245+12345) & 0x7fffffff; //Linear congruential generator
    return seed % range;
}

int main(){
    unsigned int seed = static_cast<unsigned int>(time(0));
    unsigned int range;

    cout<<"Enter the max range for random numbers: ";
    cin>>range;

    cout<<"Random numbers (10 examples):"<<endl;
    for(int i=0;i<10;i++){
        seed=customRandom(seed,range);
        cout<< seed <<endl;
    }
    cout<<endl;

    return 0;
}