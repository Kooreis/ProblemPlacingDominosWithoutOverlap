```cpp
#include <iostream>
#include <vector>

using namespace std;

class DominoBoard {
    int m, n;
    vector<vector<int>> dp;

public:
    DominoBoard(int m, int n) : m(m), n(n), dp(m + 1, vector<int>(1 << n, -1)) {}

    int countWays(int i, int mask) {
        if (i == m) return mask == 0;
        if (dp[i][mask] != -1) return dp[i][mask];
        int ans = countWays(i + 1, ((mask << 1) | (mask >> (n - 1))) & ((1 << n) - 1));
        for (int j = 0; j < n; ++j) {
            if ((mask & (1 << j)) == 0) {
                if (j < n - 1 && (mask & (1 << (j + 1))) == 0)
                    ans += countWays(i, mask | (1 << j) | (1 << (j + 1)));
                if (i < m - 1)
                    ans += countWays(i + 1, (mask | (1 << j)) & ((1 << n) - 1));
            }
        }
        return dp[i][mask] = ans;
    }
};

int main() {
    int m, n;
    cout << "Enter the dimensions of the board (m x n): ";
    cin >> m >> n;
    DominoBoard board(m, n);
    cout << "Number of ways to place dominos without overlaps: " << board.countWays(0, 0) << endl;
    return 0;
}
```